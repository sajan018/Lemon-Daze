
function HeroSection() {
    return (
        <div class="bg-white">
            <div class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                <div>
                    <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Summer <span className="opacity-60">Collection</span> Highlights</h2>
                    <p class="mt-4 text-gray-500" style={{fontFamily:"fantasy"}}>
                        Discover our exclusive summer collection designed for the modern girl. From breezy dresses to comfy co-ords, each piece blends style with comfort, making it perfect for sunny days and weekend getaways.
                    </p>

                    <dl class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                        <div class="border-t border-gray-200 pt-4">
                            <dt class="font-medium text-gray-900">Fabric</dt>
                            <dd class="mt-2 text-sm text-gray-500">Soft, breathable cotton and linen blends that keep you cool all day long.</dd>
                        </div>
                        <div class="border-t border-gray-200 pt-4">
                            <dt class="font-medium text-gray-900">Design Origin</dt>
                            <dd class="mt-2 text-sm text-gray-500">Thoughtfully designed by our in-house fashion team for trend-forward girls.</dd>
                        </div>
                        <div class="border-t border-gray-200 pt-4">
                            <dt class="font-medium text-gray-900">Size Range</dt>
                            <dd class="mt-2 text-sm text-gray-500">Available in sizes XS to XL to fit girls of all shapes and preferences.</dd>
                        </div>
                        <div class="border-t border-gray-200 pt-4">
                            <dt class="font-medium text-gray-900">Colors</dt>
                            <dd class="mt-2 text-sm text-gray-500">Pastels, florals, and vibrant shades inspired by the season’s trends.</dd>
                        </div>
                        <div class="border-t border-gray-200 pt-4">
                            <dt class="font-medium text-gray-900">What's Included</dt>
                            <dd class="mt-2 text-sm text-gray-500">Each order includes your selected outfit with complimentary gift packaging.</dd>
                        </div>
                        <div class="border-t border-gray-200 pt-4">
                            <dt class="font-medium text-gray-900">Care Instructions</dt>
                            <dd class="mt-2 text-sm text-gray-500">Machine washable with mild detergent. Recommended air dry to maintain quality.</dd>
                        </div>
                    </dl>
                </div>

                <div class="">
                  
                    <img src="k2.jpg" alt="Walnut card tray filled with cards and card angled in dedicated groove." class="rounded-2xl  " />

                </div>
            </div>
        </div>

    )
}

export default HeroSection;