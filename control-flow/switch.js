// switch Statement: Provides an alternative to multiple if...else statements by checking a variable against multiple values.
// syntax
// switch (key) {
//   case value:
    
//     break;

//   default:
//     break;
// }

// let month = 5 ;
// switch (month) {
//   case 1:
//     console.log("JAN");
//     break;
//   case 2:
//     console.log("FEB");
//     break;
//   case 3:
//     console.log("MARCH");
//     break;
//   case 4:
//     console.log("APRIL");
//     break;
//   case 5:
//     console.log("MAY");
//     break; 
//   case 6:
//     console.log("JUNE");
//     break;

//   default:
//     console.log("If nothing matches then default will be printed");
//     break;
// }

// when the case match is found, the default setting executes all the code below the case match except default.
// To avoid this we use break keyword

/*here if we had string in place of number  */
let month = "march"
switch (month) {
  case "jan": //here w will use string in values but pay attention to case-sensitivity i.e if month had value "jan" in small then we should also use small
    console.log("JAN");
    break;

    case "feb":
      console.log("FEB");
      break;

    case "march":
      console.log("MARCH");
      break;

    case "april":
      console.log("APRIL");
      break;

  default:
    console.log("default case");
    break;
}