package com.scranscanner.service.helpers;

import com.scranscanner.service.models.Availability;
import com.scranscanner.service.models.DinnerTable;
import com.scranscanner.service.repositories.AvailabilityRepository;
import com.scranscanner.service.repositories.DinnerTableRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class DataLoaderHelper {

    @Autowired
    static
    AvailabilityRepository availabilityRepository;
    @Autowired
    static
    DinnerTableRepository dinnerTableRepository;

    public static List<LocalDate> getDatesBetween(LocalDate startDate, LocalDate endDate) {

        long numOfDaysBetween = ChronoUnit.DAYS.between(startDate, endDate);
        return IntStream.iterate(0, i -> i + 1)
                .limit(numOfDaysBetween)
                .mapToObj(i -> startDate.plusDays(i))
                .collect(Collectors.toList());
    }

    public static List<Availability> getAvailabilities(List<LocalDate> dates, List<LocalTime> times, DinnerTable dinnerTable){
        List<Availability> availabilities = new ArrayList<>();
        // for each date in dates
        for (LocalDate date: dates){
            // for each time in times
            for(LocalTime time: times){
                // create a new Avail object
                Availability availability = new Availability(date, time, dinnerTable);
                availabilities.add(availability);
            }
        }
        return availabilities;
    }
    public static void buildTableAvail(DinnerTable dinnerTable, List<Availability> availabilities){

    }
}
