package com.scranscanner.server.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.scranscanner.server.models.Booking;
import com.scranscanner.server.types.PriorityType;

import javax.persistence.*;
import javax.persistence.Table;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Entity
@Table(name = "dinner_tables")
public class DinnerTable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;

    @Column
    private int tableNumber;

    @Column
    private int size;

    @Column
    @Enumerated(EnumType.STRING)
    private PriorityType priorityType;

    @ManyToOne
    @JsonIgnoreProperties({"dinnerTables", "bookings", "reviews"})
    @JoinColumn(name = "restaurant_id", nullable = false)
    private Restaurant restaurant;


//    @Column
//    private List<DinnerTable> joinables;

    @Column
    private HashMap<LocalTime, Boolean> timeSlots;

    @OneToMany(mappedBy = "dinnerTable")
    private List<Booking> bookings;

    public DinnerTable() {
    }

    public DinnerTable(int tableNumber, int size, PriorityType priorityType, Restaurant restaurant) {
        this.tableNumber = tableNumber;
        this.size = size;
        this.priorityType = priorityType;
//        this.joinables = new ArrayList<>();
        this.timeSlots = new HashMap<>();
        this.restaurant = restaurant;
        this.bookings = new ArrayList<>();
    }

    public List<Booking> getBookings() {
        return bookings;
    }

    public void setBookings(List<Booking> bookings) {
        this.bookings = bookings;
    }

    public Restaurant getRestaurant() {
        return restaurant;
    }

    public void setRestaurant(Restaurant restaurant) {
        this.restaurant = restaurant;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getTableNumber() {
        return tableNumber;
    }

    public void setTableNumber(int tableNumber) {
        this.tableNumber = tableNumber;
    }

    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }

    public PriorityType getPriorityType() {
        return priorityType;
    }

    public void setPriorityType(PriorityType priorityType) {
        this.priorityType = priorityType;
    }

//    public List<DinnerTable> getJoinables() {
//        return joinables;
//    }
//
//    public void setJoinables(List<DinnerTable> joinables) {
//        this.joinables = joinables;
//    }

    public HashMap<LocalTime, Boolean> getTimeSlots() {
        return timeSlots;
    }

    public void setTimeSlots(HashMap<LocalTime, Boolean> timeSlots) {
        this.timeSlots = timeSlots;
    }
}

