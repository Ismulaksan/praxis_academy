function unique(arr) {
    return Array.from(new Set(arr));
}
let values = ["Joko", "Susi", "Joko","Susi", "Joko", "Susi"];
alert (unique(values));