package com.scranscanner.service.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name = "bookings")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;

    @ManyToOne
    @JoinColumn(name = "customer_id", nullable = false)
    @JsonIgnoreProperties({"bookings", "savedRestaurants"})
    private Customer customer;

    @ManyToOne
    @JoinColumn(name = "restaurant_id", nullable = false)
    @JsonIgnoreProperties({"bookings", "dinnerTables", "reviews", "customers", "attributes"})
    private Restaurant restaurant;

    @ManyToOne
    @JoinColumn(name = "availability_id", nullable = false)
    @JsonIgnoreProperties({"bookings", "restaurant", "availabilities"})
    private Availability availability;

    @Column
    private int numberOfGuests;

    public Booking() {
    }

    public Booking(Customer customer, Restaurant restaurant, Availability availability, int numberOfGuests) {
        this.customer = customer;
        this.restaurant = restaurant;
        this.availability = availability;
        this.numberOfGuests = numberOfGuests;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public Restaurant getRestaurant() {
        return restaurant;
    }

    public void setRestaurant(Restaurant restaurant) {
        this.restaurant = restaurant;
    }

    public Availability getAvailability() {
        return availability;
    }

    public void setDinnerTable(Availability availability) {
        this.availability = availability;
    }

    public int getNumberOfGuests() {
        return numberOfGuests;
    }

    public void setNumberOfGuests(int numberOfGuests) {
        this.numberOfGuests = numberOfGuests;
    }

}
