function isPrime(n)
        {
            var flag = true;
            if (n < 2){
                flag = false;
            }
            else{
                for (var i = 2; i < n-1; i++)
                {
                    if (n % i == 0){
                        flag = false;
                        break;
                    }
                }
            }
            return flag;
        }
      console.log(isPrime(7));
      console.log(isPrime(17));