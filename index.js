class Cryptrooper {

  // the constructor
  constructor (text="", key="") {

    // the text and key
    this.text = String( text ).trim();
    this.key = String( key ).trim();
  }


  // the encode function
  encode () {

    // try encoding the given key
    try {

      // create an array for the text
      var splt_txt = Array( this.text.length );
      // fill the array with the charCode of each letter
      for ( var i = 0; i < this.text.length; i++ ) {
        splt_txt[ i ] = this.text.charCodeAt( i );
      }


      // the key splitting
      var key = "";
      while ( key.length < splt_txt.length ) {
        key += this.key;
      }

      // encode the text
      var result = [];
      for ( var i = 0; i < splt_txt.length; i++) {
        result.push(
          ( splt_txt[i] + key.charCodeAt(i) )
        )
      }


      // console.log( result.join( " " ), key, splt_txt );
      // temporary return for testing
      
      return {
        text: this.text,
        key: this.key,
        result: result.join( " " ),
        error: null
      };
    }
    // catch the error
    catch (err) {
      return {
        text: this.text,
        key: this.key,
        result: null,
        error: err
      }
    }

  }
  

  // the decode function
  decode () {

    try {
      
      // create a array for the text
      var splt_txt_list = this.text.split(" ");
      var splt_txt = [];
      // fill the array with the int of self
      for ( var i = 0; i < splt_txt_list.length; i++ ) {
        splt_txt.push( parseInt( splt_txt_list[i] ) );
      }
      
      // extend the key to the length of the text
      var key = "";
      while ( key.length < splt_txt.length ) {
        key += this.key;
      }
      
      // decode the text
      var result = [];
      for ( var i = 0; i < splt_txt.length; i++) {
        result.push(
          String.fromCharCode( parseInt(splt_txt[i]) - key.charCodeAt(i) )
          )
      }

      
      // console.log( result.join( " " ), key, splt_txt );
      return {
        text: this.text,
        key: this.key,
        result: result.join( "" ),
        error: null
      }
    }
    
    catch (err) {
      return {
        text: this.text,
        key: this.key,
        result: null,
        error: err
      }
    }

  }
}

exports.printMsg = function() {
  console.log(" Module Is Working! ");
}