function headerupper() {
  return `<div>
  <img onclick="location.href='index.html'" id="imglogo" src="https://i.ibb.co/XLzPz3W/logog.png" alt="" >
</div>
<div id="headermiddle">
  <div id="searchbar">
  <input type="text" placeholder="SEARCH BRAND/PRODUCT" id="inputdata" >
  <div id="productOptions"></div>
  <ion-icon name="search" id="searchableData"></ion-icon>
  
  </div>   

  <div>
  <button class="ctop">Natural Beauty</button>
  <button class="ctop">Estee Lauder</button>
  <button class="ctop">Shiseido</button>
  <button class="ctop">Double Serum</button>
  
  <div id="onlineSearch"></div>
  </div>    
</div>
<div id="headerend">
  <div>
      <select name="" id="country">
          <option value="india">India</option>
          <option value="america">America</option>
          <option>Australia</option>
          <option>England</option>
          <option>Pakistan</option>
          <option>China</option>
          <option>Africa</option>
          <option>Dubai</option>
          <option>Australia</option>
          <option>Russia</option>
          <option>Pakistan</option>
          <option>Japan</option>
          <option>Korea</option>
          <option>lanka</option>
      </select>
      <button onclick="location.href='track.html'"> Order Tracking</button>

  </div>
  <div>

  

    <button onclick="location.href='https://strawberrynet-backend.herokuapp.com/'"><ion-icon name="person-circle-outline"></ion-icon><b>Sign in</b></button>
    <button><ion-icon name="heart-circle-outline"></ion-icon><b>Whishlist</b></button>
    <button onclick="location.href='bag.html'"><ion-icon name="bag"></ion-icon><b>Bag</b></button>


    <div class="login" id="login">
    <div class="material-icons cross" onclick="cancel()">
      close
    </div>

    <div class="login-div">
      <h3 id="append-name">Sign In</h3>
    </div>


    <div class="line-straight"></div>


    <div>
      <form id="myForm-signin">
        <input id="email-input" type="email" placeholder="Email address" required>
    </div>
    <div>
      <input id="password-input" type="password" placeholder="Password" required>
    </div>
    </form>
    <p class="forgot">Forgot Password?</p>

    <button onclick="signin()" class="sign-button">SIGN IN</button>
    <div class="new-account"><a href="strawsignup.html">Create New Account.</a></div>

  </div>

  </div>
  <div>
</div>
</div>`;
}
function navbarbelow() {
  return `<div class="nav-barCenter">
<div class="dropdown">
    <div class="dropbtn"><ion-icon name="menu"></ion-icon>SHOP BY BRAND</div>
    <div class="dropdown-content">
     <div class="row">
    <div class="column">
      <h3>face</h3>
      <ul>Cleansers</ul>
      <ul>Exfoliating & Peeling</ul>
      <ul>Toners/ Face Mist</ul>
      <ul>Serum & Concentrates</ul>
      <ul>Moisturizers & Treatments</ul>
  </div>
      <div class="column">
      <h3>face</h3>
      <ul>Cleansers</ul>
      <ul>Exfoliating & Peeling</ul>
      <ul>Toners/ Face Mist</ul>
      <ul>Serum & Concentrates</ul>
      <ul>Moisturizers & Treatments</ul>
  </div>
    </div>
    </div>
  </div>
  <!-- 2nd -->
  <div class="dropdown">
      <div id="skincare"class="dropbtn" onclick="location.href='skincare.html'">SKINCARE </div>
      <div class="dropdown-content">
       <div class="row">
      <div class="column">
        <h3>FACE</h3>
        <ul>Cleansers</ul>
        <ul>Exfoliating & Peeling</ul>
        <ul>Toners/ Face Mist</ul>
        <ul>Serum & Concentrates</ul>
        <ul>Moisturizers & Treatments</ul>
    </div>
    <div class="column">
      <h3>EYE & LIP</h3>
      <ul>Cleansers</ul>
      <ul>Exfoliating & Peeling</ul>
      <h3>SUN & CARE</h3>
      <ul>Toners/ Face Mist</ul>
      <ul>Serum & Concentrates</ul>
      <ul>Moisturizers & Treatments</ul>
  </div>
        <div class="column">
        <h3>BODY</h3>
        <ul>Cleansers</ul>
        <ul>Exfoliating & Peeling</ul>
        <ul>Toners/ Face Mist</ul>
        <ul>Serum & Concentrates</ul>
        <ul>Moisturizers & Treatments</ul>
    </div>
      </div>
      </div>
    </div>
  <!-- 3rd -->
    <div class="dropdown">
      <div class="dropbtn" id="makeup" onclick="location.href='makeup.html'">MAKEUP </div>
      <div class="dropdown-content">
       <div class="row">
      <div class="column">
        <h3>face</h3>
        <ul>Cleansers</ul>
        <ul>Exfoliating & Peeling</ul>
        <ul>Toners/ Face Mist</ul>
        <ul>Serum & Concentrates</ul>
        <ul>Moisturizers & Treatments</ul>
    </div>
        <div class="column">
        <h3>face</h3>
        <ul>Cleansers</ul>
        <ul>Exfoliating & Peeling</ul>
        <ul>Toners/ Face Mist</ul>
        <ul>Serum & Concentrates</ul>
        <ul>Moisturizers & Treatments</ul>
    </div>
    <div class="column">
      <h3>face</h3>
      <ul>Cleansers</ul>
      <ul>Exfoliating & Peeling</ul>
      <ul>Toners/ Face Mist</ul>
      <ul>Serum & Concentrates</ul>
      <ul>Moisturizers & Treatments</ul>
  </div>
  <div class="column">
      <h3>face</h3>
      <ul>Cleansers</ul>
      <ul>Exfoliating & Peeling</ul>
      <ul>Toners/ Face Mist</ul>
      <ul>Serum & Concentrates</ul>
      <ul>Moisturizers & Treatments</ul>
  </div>
      </div>
      </div>
    </div>
  <!-- 4th -->
    <div class="dropdown">
      <div class="dropbtn" id="haircare" onclick="location.href='haircare.html'"> HAIRCARE</div>
      <div class="dropdown-content">
       <div class="row">
      <div class="column">
        <h3>face</h3>
        <ul>Cleansers</ul>
        <ul>Exfoliating & Peeling</ul>
        <ul>Toners/ Face Mist</ul>
        <ul>Serum & Concentrates</ul>
        <ul>Moisturizers & Treatments</ul>
    </div>
        <div class="column">
        <h3>face</h3>
        <ul>Cleansers</ul>
        <ul>Exfoliating & Peeling</ul>
        <ul>Toners/ Face Mist</ul>
        <ul>Serum & Concentrates</ul>
        <ul>Moisturizers & Treatments</ul>
    </div>
      </div>
      </div>
    </div>
  <!-- 5th -->
    <div class="dropdown">
      <div class="dropbtn" id="perfume" onclick="location.href='perfume.html'"> PERFUME </div>
      <div class="dropdown-content">
       <div class="row">
      <div class="column">
        <h3>face</h3>
        <ul>Cleansers</ul>
        <ul>Exfoliating & Peeling</ul>
        <ul>Toners/ Face Mist</ul>
        <ul>Serum & Concentrates</ul>
        <ul>Moisturizers & Treatments</ul>
    </div>
        <div class="column">
        <h3>face</h3>
        <ul>Cleansers</ul>
        <ul>Exfoliating & Peeling</ul>
        <ul>Toners/ Face Mist</ul>
        <ul>Serum & Concentrates</ul>
        <ul>Moisturizers & Treatments</ul>
    </div>
      </div>
      </div>
    </div>
  <!-- 6th -->
    <div class="dropdown">
      <div class="dropbtn" id="mensskincare" onclick="location.href='mensskincare.html'">MEN'S SKINCARE </div>
      <div class="dropdown-content">
       <div class="row">
      <div class="column">
        <h3>face</h3>
        <ul>Cleansers</ul>
        <ul>Exfoliating & Peeling</ul>
        <ul>Toners/ Face Mist</ul>
        <ul>Serum & Concentrates</ul>
        <ul>Moisturizers & Treatments</ul>
    </div>
        <div class="column">
        <h3>face</h3>
        <ul>Cleansers</ul>
        <ul>Exfoliating & Peeling</ul>
        <ul>Toners/ Face Mist</ul>
        <ul>Serum & Concentrates</ul>
        <ul>Moisturizers & Treatments</ul>
    </div>
      </div>
      </div>
    </div>
  <!-- 7th -->
    <div class="dropdown">
      <div class="dropbtn" id="menscolange"  onclick="location.href='menscolange.html'">    MEN'S COLOGNE</div>
      <div class="dropdown-content">
       <div class="row">
      <div class="column">
        <h3>face</h3>
        <ul>Cleansers</ul>
        <ul>Exfoliating & Peeling</ul>
        <ul>Toners/ Face Mist</ul>
        <ul>Serum & Concentrates</ul>
        <ul>Moisturizers & Treatments</ul>
    </div>
        <div class="column">
        <h3>face</h3>
        <ul>Cleansers</ul>
        <ul>Exfoliating & Peeling</ul>
        <ul>Toners/ Face Mist</ul>
        <ul>Serum & Concentrates</ul>
        <ul>Moisturizers & Treatments</ul>
    </div>
      </div>
      </div>
    </div>
  <!-- 8th -->
    <div class="dropdown">
      <div class="dropbtn" id="homesscents" onclick="location.href='homesscents.html'">HOME SCENT </div>
      <div class="dropdown-content">
       <div class="row">
      <div class="column">
        <ul>face</ul>
        <ul>Cleansers</ul>
        <ul>Exfoliating & Peeling</ul>
        <ul>Toners/ Face Mist</ul>
        <ul>Serum & Concentrates</ul>
        <ul>Moisturizers & Treatments</ul>
    </div>
      </div>
      </div>
    </div>
  <!-- 9th -->
    <div class="dropdown">
      <div class="dropbtn" id="specials" onclick="location.href='specials.html'"><ion-icon name="gift-outline"></ion-icon>  SPECIAL </div>
      <div class="dropdown-content">
       <div class="row">
      <div class="column">
        <h3>face</h3>
        <ul>Cleansers</ul>
        <ul>Exfoliating & Peeling</ul>
        <ul>Toners/ Face Mist</ul>
        <ul>Serum & Concentrates</ul>
        <ul>Moisturizers & Treatments</ul>
    </div>
        <div class="column">
        <h3>face</h3>
        <ul>Cleansers</ul>
        <ul>Exfoliating & Peeling</ul>
        <ul>Toners/ Face Mist</ul>
        <ul>Serum & Concentrates</ul>
        <ul>Moisturizers & Treatments</ul>
    </div>
      </div>
      </div>
    </div>
    
    <!-- 10th -->
    <div class="dropdown">
      <div class="dropbtn" id="new1" onclick="location.href='new1.html'"><ion-icon name="star"></ion-icon>  NEW </div>
      <div class="dropdown-content">
       <div class="row">
      <div class="column">
        <h3>face</h3>
        <ul>Cleansers</ul>
        <ul>Exfoliating & Peeling</ul>
        <ul>Toners/ Face Mist</ul>
        <ul>Serum & Concentrates</ul>
        <ul>Moisturizers & Treatments</ul>
    </div>
        <div class="column">
        <h3>face</h3>
        <ul>Cleansers</ul>
        <ul>Exfoliating & Peeling</ul>
        <ul>Toners/ Face Mist</ul>
        <ul>Serum & Concentrates</ul>
        <ul>Moisturizers & Treatments</ul>
    </div>
    
      </div>
      
      </div>
      
    </div>
    <div class="dropdown">
    <div class="dropbtn" id="naturalbeauty" onclick="location.href='naturalbeauty.html'"><ion-icon name="star"></ion-icon>NATURAL BEAUTY</div>
    </div>
</div>`;
}

export { headerupper, navbarbelow };
