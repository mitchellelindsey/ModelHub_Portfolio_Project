function payWithPaystack() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var amount = document.getElementById('amount').value * 100; // Convert to kobo

    var handler = PaystackPop.setup({
        key: 'your-public-key-here', // Replace with your Paystack public key
        email: email,
        amount: amount,
        currency: 'NGN',
        ref: '' + Math.floor((Math.random() * 1000000000) + 1), // Generate a random reference number
        metadata: {
            custom_fields: [
                {
                    display_name: "Customer Name",
                    variable_name: "customer_name",
                    value: name
                }
            ]
        },
        callback: function(response) {
            alert('Payment successful! Reference: ' + response.reference);
            // Perform post-payment operations here
        },
        onClose: function() {d
            alert('Payment process was cancelled.');
        }
    });
    handler.openIframe();
}
