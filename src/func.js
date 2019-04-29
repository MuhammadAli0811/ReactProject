import React from 'react'

function func()
{


    const nums = [2,4,6,8,10];

   const Pval =  nums.map(function(nums)
    {
        return nums * 2;

    })
  console.log(Pval)

    return(


        <div>
            <h1>Function Practices</h1>
        </div>




    )


}


export default func