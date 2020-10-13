import React from "react";
// import { Box, Image, Text } from "@chakra-ui/core";

const Hero = props => {
    return (
        <div class="container-fluid  main-section">
            <div class="row section-part">
                <div class="col-md-12">
                    <h1 class="float-left">Welcome To Our Creativity Hub!</h1>
                </div>
                <div class="col-md-12">
                    <p class="float-left">
                        IT'S NICE TO MEET YOU
                    </p>
                </div>
                <div class="col-md-12">
                    <button class="btn btn-light">What do we do?</button>
                </div>
            </div>
            <i class="fa fa-angle-double-down blink" aria-hidden="true"></i>
        </div>
    );
}

export default Hero;