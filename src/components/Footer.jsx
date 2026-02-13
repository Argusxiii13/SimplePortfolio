import React from 'react';

function Footer({ note }) {
    return (
        <footer className="border-t border-gray-800/70 bg-gradient-to-b from-gray-900/55 to-gray-800/35 py-8">
            <div className="container mx-auto px-6 text-center space-y-3">
                {note && (
                    <p className="text-sm text-gray-500 max-w-3xl mx-auto">
                        {note}
                    </p>
                )}
                <p className="text-xs text-gray-500">
                    © {new Date().getFullYear()} Janier Kim Anthony Esperida. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
