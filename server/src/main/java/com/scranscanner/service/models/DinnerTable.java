package com.scranscanner.service.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.scranscanner.service.types.PriorityType;

import javax.persistence.*;
import javax.persistence.Table;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
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

//    @Column
//    private HashMap<LocalTime, Boolean> timeSlots;

    @OneToMany(mappedBy = "dinnerTable")
    private List<Availability> availabilities;

    public DinnerTable() {
    }

    public DinnerTable(int tableNumber, int size, PriorityType priorityType, Restaurant restaurant) {
        this.tableNumber = tableNumber;
        this.size = size;
        this.priorityType = priorityType;
//        this.joinables = new ArrayList<>();
        this.availabilities = new ArrayList<>();
        this.restaurant = restaurant;
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

    public List<Availability> getAvailabilities() {
        return availabilities;
    }

    public void setAvailabilities(List<Availability> availabilities) {
        this.availabilities = availabilities;
    }


    public void addAvailability(Availability availability) {
        this.availabilities.add(availability);
    }
}

