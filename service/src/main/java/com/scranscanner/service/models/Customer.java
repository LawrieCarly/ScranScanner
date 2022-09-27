package com.scranscanner.service.models;

import com.scranscanner.service.types.PermissionType;

import javax.persistence.*;

@Entity
@Table(name = "users")
public class Customer extends User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;

    @Column
}
