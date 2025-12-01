import React from "react";

class Gallery extends React.Component {

    render() {

        return (
            <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
                {this.props.children}
            </section>
        );
    }
}

export default Gallery;