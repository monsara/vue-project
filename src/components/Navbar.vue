<template>
  <b-navbar type="dark" variant="dark">
    <b-container>
      <b-navbar-nav class="navbar-nav_left">
        <router-link tag="b-nav-item" to="/" active-class="active" exact
          >Home</router-link
        >
        <router-link
          tag="b-nav-item"
          :to="{ name: 'about' }"
          active-class="active"
          >About</router-link
        >

        <!-- TODO: Hide on desktop, show on mobile  -->
        <b-nav-item-dropdown text="Menu" left>
          <router-link tag="b-dropdown-item" to="/">Home</router-link>
          <router-link tag="b-dropdown-item" :to="{ name: 'about' }"
            >About</router-link
          >
        </b-nav-item-dropdown>
      </b-navbar-nav>

      <b-navbar-nav class="navbar-nav_right">
        <!-- Navbar dropdowns -->
        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="User" right>
          <b-dropdown-item href="#">Account</b-dropdown-item>
          <b-dropdown-item href="#">Settings</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-container>
  </b-navbar>
</template>