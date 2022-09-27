package com.scranscanner.service.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.List;

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
    @JsonIgnoreProperties("bookings")
    private Restaurant restaurant;

    @OneToMany(mappedBy = "booking")
    List<DinnerTable> dinnerTables;

    @Column
    private int numberOfGuests;

    public Booking() {
    }

    public Booking(Customer customer, Restaurant restaurant, List<DinnerTable> dinnerTables, int numberOfGuests) {
        this.customer = customer;
        this.restaurant = restaurant;
        this.dinnerTables = dinnerTables;
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

    public List<DinnerTable> getDinnerTables() {
        return dinnerTables;
    }

    public void setDinnerTables(List<DinnerTable> dinnerTables) {
        this.dinnerTables = dinnerTables;
    }

    public int getNumberOfGuests() {
        return numberOfGuests;
    }

    public void setNumberOfGuests(int numberOfGuests) {
        this.numberOfGuests = numberOfGuests;
    }
}
