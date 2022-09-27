package com.scranscanner.service.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.scranscanner.service.types.PermissionType;
import com.scranscanner.service.types.PriorityType;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.HashMap;
import java.util.List;

@Entity
@Table(name = "restaurants")
public class Restaurant extends User {

    @OneToMany(mappedBy = "restaurant")
    private List<DinnerTable> dinnerTables;

    @OneToMany(mappedBy = "restaurant")
    @JsonIgnoreProperties({"restaurant"})
    private List<Booking> bookings;

    @OneToMany(mappedBy = "restaurant")
    private List<Review> reviews;

    @Column
    private HashMap<String, List<String>> attributes;

    @Column
    private HashMap<PriorityType, String> incentives;

    public Restaurant() {
    }

    public Restaurant(String displayName, String email, String password, PermissionType permissionType, List<DinnerTable> dinnerTables, List<Booking> bookings, List<Review> reviews, HashMap<String, List<String>> attributes, HashMap<PriorityType, String> incentives) {
        super(displayName, email, password, permissionType);
        this.dinnerTables = dinnerTables;
        this.bookings = bookings;
        this.reviews = reviews;
        this.attributes = attributes;
        this.incentives = incentives;
    }

    public List<DinnerTable> getDinnerTables() {
        return dinnerTables;
    }

    public void setTables(List<DinnerTable> dinnerTables) {
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
}
