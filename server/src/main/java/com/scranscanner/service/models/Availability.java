package com.scranscanner.service.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Table(name = "availabilities")
public class Availability {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;

    @Column
    private LocalDate date;

    @Column
    private LocalTime time;

    @ManyToOne
    @JoinColumn(name = "dinner_table_id", nullable = false)
    @JsonIgnoreProperties({"availabilities", "bookings"})
    private DinnerTable dinnerTable;

    @Column
    private boolean isAvailable;

    public Availability() {
    }

    public Availability(LocalDate date, LocalTime time, DinnerTable dinnerTable) {
        this.date = date;
        this.time = time;
        this.dinnerTable = dinnerTable;
        this.isAvailable = true;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public LocalTime getTime() {
        return time;
    }

    public void setTime(LocalTime time) {
        this.time = time;
    }

    public boolean isAvailable() {
        return isAvailable;
    }

    public void setAvailable(boolean available) {
        isAvailable = available;
    }

    public DinnerTable getDinnerTable() {
        return dinnerTable;
    }

    public void setDinnerTable(DinnerTable dinnerTable) {
        this.dinnerTable = dinnerTable;
    }
}
