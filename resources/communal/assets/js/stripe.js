var loadStripe = function() {
  var stripe = Stripe('pk_test_01lVNaphdSv8xosyLvSm5ckt');
  var elements = stripe.elements();

  var card = elements.create('card', {
    style: {
      base: {
        iconColor: '#666EE8',
        color: '#31325F',
        lineHeight: '40px',
        fontWeight: 300,
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: '15px',

        '::placeholder': {
          color: '#CFD7E0',
        },
      },
    }
  });

  card.mount('#card-element');

  console.log("!!!!!!!!!!!!")

  function setOutcome(details) {
    return function(result) {
      var successElement = document.querySelector('.success');
      var errorElement = document.querySelector('.error');
      successElement.classList.remove('visible');
      errorElement.classList.remove('visible');

      if (result.token) {
        // Use the token to create a charge or a customer
        // https://stripe.com/docs/charges
        successElement.querySelector('.token').textContent = result.token.id;
        successElement.classList.add('visible');
        console.log(result)
        details.token = result.token
        $.post("/sol-new/charge", details)
      } else if (result.error) {
        errorElement.textContent = result.error.message;
        errorElement.classList.add('visible');
      }
    }
  }

  card.on('change', function(event) {
    setOutcome(event);
  });

  document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    var form = document.querySelector('form');
    var extraDetails = {
      name: form.querySelector('input[name=name]').value,
      phone: form.querySelector('input[name=phone]').value,
      address_line1: form.querySelector('input[name=street1]').value,
      address_line2: form.querySelector('input[name=street2]').value,
      address_city: form.querySelector('input[name=city]').value,
      address_state: form.querySelector('input[name=state]').value,
      address_zip: form.querySelector('input[name=zip]').value,
      address_country: form.querySelector('input[name=country]').value,
    };
    console.log(extraDetails)
    stripe.createToken(card, extraDetails).then(setOutcome(extraDetails));
  });
}

$(document).ready(loadStripe)

// var loadStripe = function() {
//   var stripe = Stripe('pk_test_01lVNaphdSv8xosyLvSm5ckt');
//   var elements = stripe.elements();

//   var style = {
//     base: {
//       fontSize: '16px',
//       lineHeight: '24px'
//     }
//   };

//   var card = elements.create('card', {style: style});
//   card.mount('#card-element');  
// }

