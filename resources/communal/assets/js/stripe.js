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

  function setOutcome(result) {
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
      $.post("/sol/charge", {token: result.token})
    } else if (result.error) {
      errorElement.textContent = result.error.message;
      errorElement.classList.add('visible');
    }
  }

  card.on('change', function(event) {
    setOutcome(event);
  });

  document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    var form = document.querySelector('form');
    var extraDetails = {
      name: form.querySelector('input[name=cardholder-name]').value,
    };
    stripe.createToken(card, extraDetails).then(setOutcome);
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
