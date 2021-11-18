package com.example.demo;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;


public class PalindromeCheckerTests {

    private PalindromeChecker palindromeChecker;


//    public static void setup(){
//    }

    @Test
    public void checkPalindromeTest(){
        this.palindromeChecker = new PalindromeChecker();
        String helleh ="helleh";
        boolean actual  = palindromeChecker.checkPalindrome(helleh);
    }
}
