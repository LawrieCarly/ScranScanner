package com.scranscanner.service.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.scranscanner.service.types.PermissionType;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Entity
@Table(name = "customers")
public class Customer extends User {

    @OneToMany(mappedBy = "customer")
    @JsonIgnoreProperties({"customer"})
    private List<Booking> bookings;

    @ManyToMany
    @JsonIgnoreProperties({"customers"})
    @JoinTable(
            name = "customers_savedRestaurants",
            joinColumns = {
                    @JoinColumn(name = "customer_id", nullable = false, updatable = false)
            },
            inverseJoinColumns = {
                    @JoinColumn(name = "restaurant_id", nullable = false, updatable = false)
            })
    private List<Restaurant> savedRestaurants;

    @Column
    private HashMap<String, String> preferences;

    public Customer() {
    }

    public Customer(String displayName, String email, String password, PermissionType permissionType) {
        super(displayName, email, password, permissionType);
        this.bookings = new ArrayList<>();
        this.savedRestaurants = new ArrayList<>();
        this.preferences = new HashMap<>();
    }

    public List<Booking> getBookings() {
        return bookings;
    }

    public void setBookings(List<Booking> bookings) {
        this.bookings = bookings;
    }

    public List<Restaurant> getSavedRestaurants() {
        return savedRestaurants;
    }

    public void setSavedRestaurants(List<Restaurant> savedRestaurants) {
        this.savedRestaurants = savedRestaurants;
    }

    public HashMap<String, String> getPreferences() {
        return preferences;
    }

    public void setPreferences(HashMap<String, String> preferences) {
        this.preferences = preferences;
    }

    public void addBooking(Booking booking){
        this.bookings.add(booking);
    }

    public void addSavedRestaurant(Restaurant restaurant) {
        this.savedRestaurants.add(restaurant);
    }
}
