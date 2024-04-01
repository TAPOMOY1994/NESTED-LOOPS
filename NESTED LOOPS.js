for(let i=1;i<=10;i++)
{

  console.log(i);
  for(let j=1;j<5;j++){

     console.log(j);

  }

}


const seatingChart=[['Raj','Sam','Rohit'],
                   ['Mohan','Sanjay','Tapomoy'],
                    ['Rohan','Edward']];

      

    for(let i=0;i<seatingChart.length;i++)

    {

        const row=seatingChart[i];
        
        for (let j=0;j<row.length;j++)

        {

            console.log(row[j]);
        }




    }