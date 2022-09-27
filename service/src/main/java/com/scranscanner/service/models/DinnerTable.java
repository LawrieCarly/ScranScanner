package com.scranscanner.service.models;

import com.scranscanner.service.types.PriorityType;

import javax.persistence.*;
import javax.persistence.Table;
import java.time.LocalTime;
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

    @Column
    private List<Table> joinables;

    @Column
    private HashMap<LocalTime, Boolean> timeSlots;

    public DinnerTable() {
    }

    public DinnerTable(int tableNumber, int size, PriorityType priorityType, List<Table> joinables, HashMap<LocalTime, Boolean> timeSlots) {
        this.tableNumber = tableNumber;
        this.size = size;
        this.priorityType = priorityType;
        this.joinables = joinables;
        this.timeSlots = timeSlots;
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

    public List<Table> getJoinables() {
        return joinables;
    }

    public void setJoinables(List<Table> joinables) {
        this.joinables = joinables;
    }

    public HashMap<LocalTime, Boolean> getTimeSlots() {
        return timeSlots;
    }

    public void setTimeSlots(HashMap<LocalTime, Boolean> timeSlots) {
        this.timeSlots = timeSlots;
    }
}

