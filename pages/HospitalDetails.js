import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';

export default function HospitalDetails({ hospital }) {
  /* const { hospital } = route.params || {}; */

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{hospital?.name || "Nome indisponível"}</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="close-outline" size={34} color="#666" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.imageScroll}>
        {hospital?.images?.length > 0 ? (
          hospital.images.map((image, index) => (
            <Image key={index} source={{ uri: image }} style={styles.image} resizeMode="cover" />
          ))
        ) : (
          <Text style={styles.noImageText}>Nenhuma imagem disponível.</Text>
        )}
      </ScrollView>

      <View style={styles.statusContainer}>
        <Text style={styles.statusText}>{hospital?.services || "0"} serviços</Text>
        <View style={styles.rating}>
          <MaterialIcons name="star" size={24} color="#f4c430" />
          <Text style={styles.ratingText}>{hospital?.rating || "N/A"}</Text>
        </View>
        <FontAwesome name="wheelchair" size={24} color="#000" />
        <Text style={styles.openStatus}>ABERTO</Text>
      </View>

      <View style={styles.infoContainer}>
        <MaterialIcons name="location-on" size={30} color="#6c63ff" />
        <Text style={styles.infoText}>{hospital?.address || "Endereço indisponível"}</Text>
        {hospital?.address && (
          <TouchableOpacity
            onPress={() => {
              const url = `https://www.google.com/maps?q=${encodeURIComponent(hospital.address)}`;
              Linking.openURL(url);
            }}
          >
            <Ionicons name="map" size={24} color="#6c63ff" style={styles.mapIcon} />
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.operationContainer}>
        <Text style={styles.operationTitle}>FUNCIONAMENTO</Text>
        <Text style={styles.operationText}>
          {hospital?.operation || "Aberto 24 horas"}
        </Text>
      </View>

      <View style={styles.carouselContainer}>
        <Text style={styles.operationTitle}>SERVIÇOS MÉDICOS</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {hospital?.medicalServices?.map((service, index) => (
            <View key={index} style={styles.card}>
              <Image source={{ uri: service.image }} style={styles.cardImage} />
              <Text style={styles.cardText}>{service.name}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={styles.carouselContainer}>
        <Text style={styles.operationTitle}>CONVÊNIOS</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {hospital?.insurance?.map((plan, index) => (
            <View key={index} style={styles.card}>
              <Image source={{ uri: plan.image }} style={styles.cardImage} />
              <Text style={styles.cardText}>{plan.name}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
    marginRight: 10,
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 10,
  },
  imageScroll: {
    marginVertical: 15,
  },
  image: {
    width: 250,
    height: 150,
    borderRadius: 10,
    marginRight: 10,
  },
  noImageText: {
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#888',
    marginBottom: 20,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    elevation: 3,
  },
  statusText: {
    fontSize: 16,
    color: '#333',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 16,
    color: '#444',
    marginLeft: 5,
  },
  openStatus: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#28a745',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: '#EFEFEF',
    padding: 10,
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },
  infoText: {
    fontSize: 13,
    marginLeft: 10,
    color: '#000',
    fontWeight: 'bold',
  },
  mapIcon: {
    marginLeft: 10,
  },
  operationContainer: {
    marginTop: 20,
  },
  operationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  operationText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    backgroundColor: '#EFEFEF',
    padding: 10,
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },
  card: {
    width: 120,
    height: 120,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
  },
  cardImage: {
    width: 60,
    height: 60,
    marginBottom: 5,
  },
  cardText: {
    fontSize: 14,
    textAlign: 'center',
  },
});
