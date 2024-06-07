import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandWhatsapp, IconMail } from "@tabler/icons-react";
import React from "react";

function ShareButtons() {
    return (
        <div class="row mb-3 pt-4">
            <div class="col-md-11 d-flex align-items-center px-4">
                <div class="logo">
                    <h2 class="mb-3">Share On</h2>
                    <ul class="list-unstyled list-inline mb-0">
                        <li class="mb-3 list-inline-item"><a href="#" class="text-decoration none text-secondary undrlne ">
                           <IconBrandFacebook/>
                           </a></li>
                        <li class="mb-3 list-inline-item"><a href="#" class="text-decoration none text-secondary undrlne ">
                         <IconBrandInstagram/>
                        </a></li>
                        <li class="mb-3 list-inline-item"><a href="#" class="text-decoration none text-secondary undrlne">
                            <IconBrandLinkedin/>
                            </a></li>
                        <li class="mb-3 list-inline-item"><a href="#" class="text-decoration none text-secondary undrlne">
                            <IconMail/>
                            </a></li>
                        <li class="mb-3 list-inline-item"><a href="#" class="text-decoration none text-secondary undrlne">
                            <IconBrandWhatsapp />
                        </a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ShareButtons;