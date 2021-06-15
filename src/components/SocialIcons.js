import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { SocialListItem, SocialList } from "./Typography";

export default function SocialIcons(props) {
    return (
        <SocialList>
            {props.socials.map((social) => {
                return (
                    <SocialListItem>
                        <a href={social.link} target="_blank">
                            <FontAwesomeIcon
                                icon={social.icon}
                                size="2x"
                                color="white"
                                className={`social-icon`}
                            />
                        </a>
                    </SocialListItem>
                );
            })}
        </SocialList>
    );
}
