package com.scranscanner.service.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.scranscanner.service.repositories.AvailabilityRepository;
import com.scranscanner.service.types.PermissionType;
import com.scranscanner.service.types.PriorityType;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Entity
@Table(name = "restaurants")
public class Restaurant extends User {

    @OneToMany(mappedBy = "restaurant")
    @JsonIgnoreProperties({"restaurant", "bookings"})
    private List<DinnerTable> dinnerTables;

    @OneToMany(mappedBy = "restaurant")
    @JsonIgnoreProperties({"restaurant"})
    private List<Booking> bookings;

    @OneToMany(mappedBy = "restaurant")
    @JsonIgnoreProperties({"restaurant"})
    private List<Review> reviews;

    @ManyToMany
    @JsonIgnoreProperties({"savedRestaurants", "bookings"})
    @JoinTable(
            name = "customers_savedRestaurants",
            joinColumns = {
                    @JoinColumn(name = "restaurant_id", nullable = false, updatable = false)
            },
            inverseJoinColumns = {
                    @JoinColumn(name = "customer_id", nullable = false, updatable = false)
            })
    private List<Customer> customers;

    @Column
    private HashMap<String, List<String>> attributes;

    @Column
    private HashMap<PriorityType, String> incentives;

    public Restaurant() {
    }

    public Restaurant(String displayName, String email, String password, PermissionType permissionType) {
        super(displayName, email, password, permissionType);
        this.dinnerTables = new ArrayList<>();
        this.bookings = new ArrayList<>();
        this.reviews = new ArrayList<>();
        this.customers = new ArrayList<>();
        this.attributes = new HashMap<>();
        this.incentives = new HashMap<>();
    }

    public List<Customer> getCustomers() {
        return customers;
    }

    public void setCustomers(List<Customer> customers) {
        this.customers = customers;
    }

    public List<DinnerTable> getDinnerTables() {
        return dinnerTables;
    }

    public void setDinnerTables(List<DinnerTable> dinnerTables) {
        this.dinnerTables = dinnerTables;
    }

    public List<Booking> getBookings() {
        return bookings;
    }

    public void setBookings(List<Booking> bookings) {
        this.bookings = bookings;
    }

    public List<Review> getReviews() {
        return reviews;
    }

    public void setReviews(List<Review> reviews) {
        this.reviews = reviews;
    }

    public HashMap<String, List<String>> getAttributes() {
        return attributes;
    }

    public void setAttributes(HashMap<String, List<String>> attributes) {
        this.attributes = attributes;
    }

    public HashMap<PriorityType, String> getIncentives() {
        return incentives;
    }

    public void setIncentives(HashMap<PriorityType, String> incentives) {
        this.incentives = incentives;
    }

    public void addDinnerTable(DinnerTable dinnerTable) {
        this.dinnerTables.add(dinnerTable);
    }

    public void addBooking(Booking booking) {
        this.bookings.add(booking);
    }

    public void addAttribute(String key, String value) {
        ArrayList<String> array = new ArrayList<>();
        array.add(value);
        this.attributes.put(key, array);
    }

    public void addReview(Review review){
        this.reviews.add(review);
    }


}
