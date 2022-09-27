package com.scranscanner.service.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.scranscanner.service.types.PermissionType;

import javax.persistence.*;
import java.util.HashMap;

@Entity
@Table(name = "customers")
public class Customer extends User {

    @OneToMany(mappedBy = "customer")
    @JsonIgnoreProperties({"customer"})
    private List<Booking> bookings;

    @OneToMany(mappedBy = "customer")
    @JsonIgnoreProperties({"bookings", "tables", "reviews"})
    private List<Restaurant> savedRestaurants;

    @Column
    private HashMap<String, String> preferences;

    public Customer() {
    }

    public Customer(String displayName, String email, String password, PermissionType permissionType, List<Booking> bookings, List<Restaurant> savedRestaurants, HashMap<String, String> preferences) {
        super(displayName, email, password, permissionType);
        this.bookings = bookings;
        this.savedRestaurants = savedRestaurants;
        this.preferences = preferences;
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
}
