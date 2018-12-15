import React from "react";

function shuffle() {
    // Fisher–Yates Shuffle (Knuth variant)
    // To shuffle an array a of n elements (indices 0..n-1):
    //   for i from n - 1 downto 1 do
    //        j <- random integer with 0 <= j <= i
    //        exchange a[j] and a[i]

    // jQuery specific:
    // 1) remove elements from DOM and convert them into a native JavaScript array
    // 2) apply algorithm
    // 3) inject the array back to DOM

    var a = $("#imageDeck > div").remove().toArray();
    for (var i = a.length - 1; i >= 1; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var bi = a[i];
        var bj = a[j];
        a[i] = bj;
        a[j] = bi;
    }
    $("#imageDeck").append(a);
}
