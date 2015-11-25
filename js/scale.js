function changescale()
{
    var ddl1 = document.getElementById("ddlcategory");

    if(this.value === "linear"){          

          y = d3.scale.linear()
              .range([height, 0]);           
            
           if(ddl1.value === "median")
           {
           //x.domain(d3.extent(data, function(d) { return d.Yr; }));
             y.domain([0, d3.max(data1, function(d) { return d.a_median; })]);

              dataNest.forEach(function(d){
                svg.selectAll("path")
                  .data(data1)            
                  .transition().delay(1000).duration(1000)
                  .attr("d", priceline(d.values))                 
             });
          }

          if(ddl1.value === "employed")
          {
            y.domain([0, d3.max(data1, function(d) { return d.tot_emp; })]);

              dataNest.forEach(function(d){
                svg.selectAll("path")
                  .data(data1)            
                  .transition().delay(1000).duration(1000)
                  .attr("d", priceline1(d.values))                
             });  
          }

          if(ddl1.value === "totaljobs")
          {
            y.domain([0, d3.max(data1, function(d) { return d.jobs_1000; })]);

              dataNest.forEach(function(d){
                svg.selectAll("path")
                  .data(data1)            
                  .transition().delay(1000).duration(1000)
                  .attr("d", priceline2(d.values))                
             });        
          }
           
          svg.selectAll(".y")
           .transition().delay(1000).duration(1000)
           .call(yAxis.scale(y));
          
        }


        if(this.value === "power"){         

           y = d3.scale.pow().exponent(3)
              .range([height, 0]);
            
            if(ddl1.value === "median")
            {
           //x.domain(d3.extent(data, function(d) { return d.Yr; }));
             y.domain([0, d3.max(data1, function(d) { return d.a_median; })]);

              dataNest.forEach(function(d){
                svg.selectAll("path")
                  .data(data1)            
                  .transition().delay(1000).duration(1000)
                  .attr("d", priceline(d.values))                 
             });
          }

          if(ddl1.value === "employed")
          {
            y.domain([0, d3.max(data1, function(d) { return d.tot_emp; })]);

              dataNest.forEach(function(d){
                svg.selectAll("path")
                  .data(data1)            
                  .transition().delay(1000).duration(1000)
                  .attr("d", priceline1(d.values))                
             });  
          }

          if(ddl1.value === "totaljobs")
          {
            y.domain([0, d3.max(data1, function(d) { return d.jobs_1000; })]);

              dataNest.forEach(function(d){
                svg.selectAll("path")
                  .data(data1)            
                  .transition().delay(1000).duration(1000)
                  .attr("d", priceline2(d.values))                
             });
          }          

            svg.selectAll(".y")
           .transition().delay(1000).duration(1000)
           .call(yAxis.scale(y)); 
        }

        if(this.value === "log"){         

          var superscript = "⁰¹²³⁴⁵⁶⁷⁸⁹",
        formatPower = function(d) { return (d + "").split("").map(function(c) { return superscript[c]; }).join(""); };

            y = d3.scale.log()
              .range([height, 0]);            

            if(ddl1.value === "median")
            {
              //alert("median");              
             y.domain([10, d3.max(data1, function(d) { return d.a_median; })]);

              dataNest.forEach(function(d){
                svg.selectAll("path")
                  .data(data1)
                  .transition().delay(1000).duration(1000)
                  .attr("d", priceline(d.values))                 
             });
          }

          if(ddl1.value === "employed")
          {
            
            y.domain([10, d3.max(data1, function(d) { return d.tot_emp; })]);

              dataNest.forEach(function(d){
                svg.selectAll("path")
                  .data(data1)  
                  .transition().delay(1000).duration(1000)
                  .attr("d", priceline1(d.values))                
             });
          }

          if(ddl1.value === "totaljobs")
          {
            
            y.domain([10, d3.max(data1, function(d) { return d.jobs_1000; })]);
           
              dataNest.forEach(function(d){
                svg.selectAll("path")
                  .data(data1)            
                  .transition().delay(1000).duration(1000)
                  .attr("d", priceline2(d.values))                
             });
          }          

            svg.selectAll(".y")
           .transition().delay(1000).duration(1000)
           .call(yAxis.scale(y));             
        }
    
}
