/*
 * REM: A program to find the lcm of two numbers
 *
 */

function lcm( number_1, number_2 ){

  var max = number_1*number_2; // The maximum value for the LCM i.e (value1 * value2)
  var num_1_multiples = []; // Container for the multiples of (value1)
  var num_2_multiples = []; // Container for the multiples of (value2)

  for( var i=1; i>0; i++ ){ // Create a no-end loop that increments by (1) to serve as our multiple generator
    multiple_1 = number_1*i; // Calculate a new multiple e.g when i=1; multiple_1=value1*1, when i=2; multiple_1=value1*2,
    // if (value1) was 3 then; when i=1; multiple_1=3*1=3, when i=2; multiple_1=3*2=6, where {3, 6} are multiples of 3
    multiple_2 = number_2*i; // Same as above for (value2)

    if( num_1_multiples.indexOf(multiple_2) != -1 ){ // Check if the new multiple of (value1) is already in the multiples of (value2)
      return multiple_2; // Return the multiple because it's the first number that will appear as a multiple of both numbers
    } else if( num_2_multiples.indexOf(multiple_1) != -1 ){ // Check if the new multiple of (value2) is already in the multiples of (value1)
      return multiple_1; // Return the multiple
    } else if( multiple_1==max || multiple_2==max ){ // When we reach the maximum value for the LCM i.e (value1*value2)
      return max; // Return the maximum
    }

    num_1_multiples.push( multiple_1 ); // Add (multiple_1) as a multiple of (value1)
    num_2_multiples.push( multiple_2 ); // Add (multiple_2) as a multiple of (value2)
  }

}
