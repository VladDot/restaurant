export const GoogleMaps = () => {
    return (
        <section className="pt-4 bg-[#05090E] ">
            <div className="container">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d169588.9062156499!2d35.139075!3d48.383066!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbfeaa28e8318f%3A0xc06201a6413284a2!2z0JrQvtC00LDQutGB0LrQsNGPINC60YDQtdC_0L7RgdGC0Yw!5e0!3m2!1sru!2sua!4v1705919425256!5m2!1sru!2sua"
                    width="100%"
                    allowFullScreen={true}
                    title="Google Maps"
                    className="aspect-[1/1.3] xl:aspect-[2]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </section>
    );
};
