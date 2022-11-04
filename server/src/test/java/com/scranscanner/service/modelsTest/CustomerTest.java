package com.scranscanner.service.modelsTest;

import com.scranscanner.service.models.Customer;
import com.scranscanner.service.models.Restaurant;
import com.scranscanner.service.types.PermissionType;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class CustomerTest {

    Customer customer;

    Restaurant restaurant;

    @BeforeEach
    public void before(){
        customer = new Customer("Ethan Baird", "ethan@email.com", "password", PermissionType.CUSTOMER);
        restaurant = new Restaurant("Chez Jules", "chezjules@email.com", "password", PermissionType.RESTAURANT, "description", "imageURL");
    }

    @Test
    public void canAddSavedRestaurant(){
        customer.addSavedRestaurant(restaurant);
        int noSavedRests = customer.getSavedRestaurants().size();
        assertEquals(noSavedRests, 1);
    }
}
