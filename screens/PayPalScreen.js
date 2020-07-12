
import React, { Component } from 'react';
import { Text, Button, View } from 'react-native';
import axios from 'axios';
import * as Progress from 'react-native-progress';
import { WebView } from 'react-native-webview';
class PayPalScreen extends Component {


  state = {
    accessToken: null,
    approvalUrl: null,
    paymentId: null,
    orderId: '',
    totalPrice: '',
    displayLoadingView: true,
  }
  componentDidMount() {
    console.log('order id passed = ' + this.props.route.params.oid);
    this.setState({
      orderId: this.props.route.params.oid,
      totalPrice: this.props.route.params.totalPrice
    }, () => {

      console.log("totalPrice = " + this.state.totalPrice)
      this.loadToken();

    });
  }

  getPaymentUrl() {

    const dataDetail = {
      "intent": "sale",
      "payer": {
        "payment_method": "paypal"
      },
      "transactions": [{
        "amount": {
          "total": this.state.totalPrice.toString(),
          "currency": "USD",
          "details": {
            "subtotal": this.state.totalPrice.toString(),
            "tax": "0",
            "shipping": "0",
            "handling_fee": "0",
            "shipping_discount": "0",
            "insurance": "0"
          }
        }

      }],
      "redirect_urls": {
        "return_url": "https://illumenium.veebispetsid.com/payment.php?order_id=" + this.state.orderId,
        "cancel_url": "https://illumenium.veebispetsid.com/payment.php?order_id=" + this.state.orderId + "&cancel=true"
      }
    }

    fetch("https://api.sandbox.paypal.com/v1/payments/payment", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.state.access_token}`
      },
      body: JSON.stringify(dataDetail)
    })
      .then(res => res.json())
      .then(res => {
        console.log('response recieved ');
        console.log('payment id = ' + res.id);

        const { id, links } = res
        const approvalUrl = links.find(data => data.rel == "approval_url")
        this.setState({
          paymentId: id,
          approvalUrl: approvalUrl.href,
          displayLoadingView: false,
        }, () => {
          console.log("web view will be displayed now");
        });
      })
      .finally(() => {
        console.log('navigate to webview ' + this.state.approvalUrl);
      })
      .catch((err) => {
        console.log(err);
      })

  }

  loadToken() {
    fetch('https://api.sandbox.paypal.com/v1/oauth2/token?grant_type=client_credentials', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': "Basic QWVIS0lhcXJSOF81ZWpTZHFDdHFGZTVqalJwZWFYa1VST2phNGdoNlpnTk12dlFSN1pmTzhHNDJ2MzBhWklzbFpnX3I4OFl5aHdfTHdiMnM6RUVFa21TaEREVVlRWDFWa0xIblR6b2ZtNlhkVUkyNXljNGVfR1dtQWdrd3RiY1hrdkNBbk8yeU5pYnNTN3JOQXRLLTRiQV9rN3NJZm5pZ3A="
      }
    }).then(response => response.json())
      .then(res => {
        this.setState({ access_token: res.access_token });
        console.log('#1: token retreived');
        this.getPaymentUrl();
      })
      .finally(() => {
        console.log('finally');
      })
      .catch((err) => console.log(err));
  }

  webViewLoading() {
    return (
      <Progress.Circle size={50} indeterminate={true} />
    );
  }

  displayLoadingViewOrNot() {
    if (this.state.displayLoadingView) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 20, marginBottom: 12 }}>Please wait</Text>
          <Progress.Circle size={50} indeterminate={true} />
        </View>
      )
    } else {
      return (
        <View style={{ flex: 1 }}>
          <WebView style={{ width: '100%' }} source={{ uri: this.state.approvalUrl }}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            renderLoading={this.webViewLoading()}
            startInLoadingState={true}
            onNavigationStateChange={(webState) => {
              //console.log("url in wv = " + webState.url);
              if (webState.url.includes("order_id")) {
                console.log("url includes order_id " + webState.url);
                // url = new URL(webState.url);
                // console.log("order id = " + url.get('order_id'));
              }
            }}
            startInLoadingState={false}
          />
        </View>
      )
    }
  }

  render() {
    return (
      <>
        {this.displayLoadingViewOrNot()}
      </>
    )
  }
}
export { PayPalScreen };

//AeHKIaqrR8_5ejSdqCtqFe5jjRpeaXkUROja4gh6ZgNMvvQR7ZfO8G42v30aZIslZg_r88Yyhw_Lwb2s: client id
//secret: EEEkmShDDUYQX1VkLHnTzofm6XdUI25yc4e_GWmAgkwtbcXkvCAnO2yNibsS7rNAtK-4bA_k7sIfnigp

// {
//     "scope": "https://uri.paypal.com/services/invoicing https://uri.paypal.com/services/disputes/read-buyer https://uri.paypal.com/services/payments/realtimepayment https://uri.paypal.com/services/disputes/update-seller https://uri.paypal.com/services/payments/payment/authcapture openid https://uri.paypal.com/services/disputes/read-seller https://uri.paypal.com/services/payments/refund https://api.paypal.com/v1/vault/credit-card https://api.paypal.com/v1/payments/.* https://uri.paypal.com/payments/payouts https://api.paypal.com/v1/vault/credit-card/.* https://uri.paypal.com/services/subscriptions https://uri.paypal.com/services/applications/webhooks",
//     "access_token": "A21AAF-qNSgjrWAI_nmqVpfEqoae5bdt6aCK-hlgjv2Xc6Yiz9jvwarzN-WbSFsuVpZCqvSzrnoN4PcOGAMXtNZ4ZsgUc_BOg",
//     "token_type": "Bearer",
//     "app_id": "APP-80W284485P519543T",
//     "expires_in": 32400,
//     "nonce": "2020-07-08T14:03:30ZZGpurUmVQDPCxhWTB2EjmjYStusSK_YNmbjEEa0gEsA"
// }

