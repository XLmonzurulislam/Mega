// https://example.com/new-page
// https://echifobi.top/4/9086857
document.getElementById("test").addEventListener("click", function(event) {
    event.preventDefault(); // ডিফল্ট লিংক ওপেন বন্ধ করা

    window.open(this.href, "_blank"); // নতুন ট্যাবে লিংক ওপেন

    window.location.href = "https://echifobi.top/4/9086857"; // মূল পেজের URL পরিবর্তন এবং রিলোড
});