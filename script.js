const apiKey = "440f66ef3e46e0aaa19d4a22f186eb61";
      const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

      const searchcity=document.querySelector("#search input");
      const searchbtn=document.querySelector("#search button");
      const weatherIcon=document.querySelector(".weather-icon");

      async function checkWeather(city){
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

        if(response.status == 404)
        {
          document.querySelector(".error").style.display="block";
          document.querySelector("#weather").style.display="none";
        }
        else{
              var data = await response.json();

                // console.log(data);

              document.querySelector(".city").innerHTML=data.name;
              document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +" °C";
              document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
              document.querySelector(".wind").innerHTML=Math.round((data.wind.speed)*3.6) +" Km/hr";

              if(data.weather[0].main == "Clouds" || data.weather[0].main =="Haze")
                {
                weatherIcon.src="images/clouds.png";
                }
                else if(data.weather[0].main == "Clear")
                {
                weatherIcon.src="images/clear.png";
                }
                else if(data.weather[0].main == "Rain")
                {
                weatherIcon.src="images/rain.png"
                }
                else if(data.weather[0].main == "Drizzle")
                {
                weatherIcon.src="images/drizzle.png"
                }else if(data.weather[0].main == "Mist" || data.weather[0].main == "Smoke")
                {
                weatherIcon.src="images/mist.png"
                }


                document.querySelector("#weather").style.display="block";
                document.querySelector(".error").style.display="none";
        }
        

      }

      searchbtn.addEventListener('click',()=>{
        checkWeather(searchcity.value);
    })

    searchcity.addEventListener("keypress", function(event) {
        // If the user presses the "Enter" key on the keyboard
        if (event.key === "Enter") {
          // Cancel the default action, if needed
          event.preventDefault();
          // Trigger the button element with a click
          searchbtn.click();
        }
      });
    
   
      

      
      