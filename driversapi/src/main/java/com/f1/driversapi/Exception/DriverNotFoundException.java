package com.f1.driversapi.Exception;

public class DriverNotFoundException extends RuntimeException {
    public DriverNotFoundException(String message) {
        super(message);
    }

    public DriverNotFoundException() {
        super("Employee not found");
    }

}
