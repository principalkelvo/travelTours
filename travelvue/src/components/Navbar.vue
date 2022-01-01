<template>
    <nav class="navbar is-dark">
        <div class="navbar-brand">
            <router-link to="/" class="navbar-item">
                <strong>LOGO</strong>
            </router-link>
            <a class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar-menu">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div class="navbar-menu">
            <div class="navbar-end">
                <router-link to="/" class="navbar-item">HOME</router-link>
                <router-link to="/about" class="navbar-item">ABOUT US</router-link>
                <router-link to="/" class="navbar-item">CONTACT</router-link>
                <router-link to="/" class="navbar-item">BOOKING</router-link>
                <div class="navbar-item">
                    <div class="buttons">
                        <router-link to="/log-in" class="button is-light">Log In</router-link>
                        <router-link to="/cart" class="button is-light">cart</router-link>
                    </div>
                </div>
            </div>
        </div>
    </nav>
                        
</template>