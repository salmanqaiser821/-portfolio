/*!
=========================================================
* Meyawo Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});

document.addEventListener('DOMContentLoaded', function() {
    const scrollDownIcon = document.getElementById('scrollDownIcon');
    scrollDownIcon.addEventListener('click', function() {
        // Scroll to the bottom of the page
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth' // Smooth scrolling effect
        });
    });
});

// Scroll to top when the scroll-up button is clicked
    document.getElementById("scrollUpBtn").addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

document.addEventListener('DOMContentLoaded', function() {
    // Get the download button element
    var downloadBtn = document.getElementById('downloadBtn');

    // Add click event listener
    downloadBtn.addEventListener('click', function() {
        // Create an anchor element
        var downloadLink = document.createElement('a');
        downloadLink.href = 'path/to/your/resume.pdf'; // Update with the correct path to your resume PDF
        downloadLink.download = 'Salman_Ahmad_Resume.pdf'; // Specify the file name for download
        document.body.appendChild(downloadLink);
        downloadLink.click(); // Trigger the download
        document.body.removeChild(downloadLink); // Clean up after download
    });
});
