package com.scranscanner.service.models;

import com.scranscanner.service.types.PermissionType;

public abstract class User {

    private String displayName;

    private String email;

    private String password;

    private PermissionType permissionType;

    public User(String displayName, String email, String password, PermissionType permissionType) {
        this.displayName = displayName;
        this.email = email;
        this.password = password;
        this.permissionType = permissionType;
    }

    public String getDisplayName() {
        return displayName;
    }

    public void setDisplayName(String displayName) {
        this.displayName = displayName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public PermissionType getPermissionType() {
        return permissionType;
    }

    public void setPermissionType(PermissionType permissionType) {
        this.permissionType = permissionType;
    }
}
