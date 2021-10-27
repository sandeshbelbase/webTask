var num = [17, 19, 21]
var sum =0;
for(i=0;i<=num.length;i++)
{
  //0 conditon
  if(num[i]===0)
  {
    sum+=1;
  }
  //case Even
  if(num[i]%2===0)
  {
    sum+=1;
  }
  //case 5
  if(num[i]===5)
    {
      sum+=5;
    }
    //case odd
    else if(num[i]%2>=1)
    {
      sum+=3;
    }
  
}
console.log(sum);