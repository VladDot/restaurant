import { FormLogin, FormRegistration, Title } from "../../../components";

import { getStyles } from "../style";

interface IContentReversProps {
    isRevers: boolean | undefined;
}

export const ContentRevers: React.FC<IContentReversProps> = ({ isRevers }) => {
    const { reversStyle } = getStyles({ isRevers });

    return (
        <div className=" min-w-[320px] w-full">
            <div className={reversStyle}>
                <div className="absolute backCard w-full h-full flex flex-col items-center z-10">
                    <Title
                        text="Registration"
                        className="select-none font-secondFont sectionTitle py-4"
                    />

                    <FormRegistration />
                </div>

                <div className="absolute backFace w-full h-full flex flex-col items-center z-1 ">
                    <Title
                        text="login"
                        className="select-none font-secondFont sectionTitle py-4"
                    />

                    <FormLogin />
                </div>
            </div>
        </div>
    );
};
