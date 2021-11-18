import React from 'react';

import { Header, Categories, SortPopup } from './components';

function App() {


    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories onClickItem={(name) => console.log(name)} items={[
                            'Drinks',
                            'Mocha',
                            'Latte',
                            'Cold Brew',
                            'Good tidings'
                        ]} />

                        <SortPopup/>
        
                    </div>
                    <h2 className="content__title">Menu</h2>
                    <div className="content__items">
                        <div className="pizza-block">
                            <img
                                className="pizza-block__image"
                                src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-74910.png"
                                alt="Pizza"
                            />
                            <h4 className="pizza-block__title">Peppermint Mocha</h4>
                            <div className="pizza-block__selector">
                                <ul>
                                    <li className="active">Holiday Blend</li>
                                    <li>Decaf</li>
                                </ul>
                                <ul>
                                    <li className="active">Tall</li>
                                    <li>Grande</li>
                                    <li>Venti</li>
                                </ul>
                            </div>
                            <div className="pizza-block__bottom">
                                <div className="pizza-block__price">15 $</div>
                                <div className="button button--outline button--add">
                                    <svg
                                        width="12"
                                        height="12"
                                        viewBox="0 0 12 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                            fill="white"
                                        />
                                    </svg>
                                    <span>Add to Order</span>
                                    <i>2</i>
                                </div>
                            </div>
                        </div> <div className="pizza-block">
                            <img
                                className="pizza-block__image"
                                src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-74911.png"
                                alt="Pizza"
                            />
                            <h4 className="pizza-block__title">Peppermint Mocha</h4>
                            <div className="pizza-block__selector">
                                <ul>
                                    <li className="active">Holiday Blend</li>
                                    <li>Decaf</li>
                                </ul>
                                <ul>
                                    <li className="active">Tall</li>
                                    <li>Grande</li>
                                    <li>Venti</li>
                                </ul>
                            </div>
                            <div className="pizza-block__bottom">
                                <div className="pizza-block__price">15 $</div>
                                <div className="button button--outline button--add">
                                    <svg
                                        width="12"
                                        height="12"
                                        viewBox="0 0 12 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                            fill="white"
                                        />
                                    </svg>
                                    <span>Add to Order</span>
                                    <i>2</i>
                                </div>
                            </div>
                        </div> <div className="pizza-block">
                            <img
                                className="pizza-block__image"
                                src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-74912.png"
                                alt="Pizza"
                            />
                            <h4 className="pizza-block__title">Peppermint Mocha</h4>
                            <div className="pizza-block__selector">
                                <ul>
                                    <li className="active">Holiday Blend</li>
                                    <li>Decaf</li>
                                </ul>
                                <ul>
                                    <li className="active">Tall</li>
                                    <li>Grande</li>
                                    <li>Venti</li>
                                </ul>
                            </div>
                            <div className="pizza-block__bottom">
                                <div className="pizza-block__price">15 $</div>
                                <div className="button button--outline button--add">
                                    <svg
                                        width="12"
                                        height="12"
                                        viewBox="0 0 12 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                            fill="white"
                                        />
                                    </svg>
                                    <span>Add to Order</span>
                                    <i>2</i>
                                </div>
                            </div>
                        </div> <div className="pizza-block">
                            <img
                                className="pizza-block__image"
                                src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-74913.png"
                                alt="Pizza"
                            />
                            <h4 className="pizza-block__title">Peppermint Mocha</h4>
                            <div className="pizza-block__selector">
                                <ul>
                                    <li className="active">Holiday Blend</li>
                                    <li>Decaf</li>
                                </ul>
                                <ul>
                                    <li className="active">Tall</li>
                                    <li>Grande</li>
                                    <li>Venti</li>
                                </ul>
                            </div>
                            <div className="pizza-block__bottom">
                                <div className="pizza-block__price">15 $</div>
                                <div className="button button--outline button--add">
                                    <svg
                                        width="12"
                                        height="12"
                                        viewBox="0 0 12 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                            fill="white"
                                        />
                                    </svg>
                                    <span>Add to Order</span>
                                    <i>2</i>
                                </div>
                            </div>
                        </div> <div className="pizza-block">
                            <img
                                className="pizza-block__image"
                                src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-74916.png"
                                alt="Pizza"
                            />
                            <h4 className="pizza-block__title">Peppermint Mocha</h4>
                            <div className="pizza-block__selector">
                                <ul>
                                    <li className="active">Holiday Blend</li>
                                    <li>Decaf</li>
                                </ul>
                                <ul>
                                    <li className="active">Tall</li>
                                    <li>Grande</li>
                                    <li>Venti</li>
                                </ul>
                            </div>
                            <div className="pizza-block__bottom">
                                <div className="pizza-block__price">15 $</div>
                                <div className="button button--outline button--add">
                                    <svg
                                        width="12"
                                        height="12"
                                        viewBox="0 0 12 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                            fill="white"
                                        />
                                    </svg>
                                    <span>Add to Order</span>
                                    <i>2</i>
                                </div>
                            </div>
                        </div> <div className="pizza-block">
                            <img
                                className="pizza-block__image"
                                src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-74917.png"
                                alt="Pizza"
                            />
                            <h4 className="pizza-block__title">Peppermint Mocha</h4>
                            <div className="pizza-block__selector">
                                <ul>
                                    <li className="active">Holiday Blend</li>
                                    <li>Decaf</li>
                                </ul>
                                <ul>
                                    <li className="active">Tall</li>
                                    <li>Grande</li>
                                    <li>Venti</li>
                                </ul>
                            </div>
                            <div className="pizza-block__bottom">
                                <div className="pizza-block__price">15 $</div>
                                <div className="button button--outline button--add">
                                    <svg
                                        width="12"
                                        height="12"
                                        viewBox="0 0 12 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                            fill="white"
                                        />
                                    </svg>
                                    <span>Add to Order</span>
                                    <i>2</i>
                                </div>
                            </div>
                        </div> <div className="pizza-block">
                            <img
                                className="pizza-block__image"
                                src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-75108.png"
                                alt="Pizza"
                            />
                            <h4 className="pizza-block__title">Peppermint Mocha</h4>
                            <div className="pizza-block__selector">
                                <ul>
                                    <li className="active">Holiday Blend</li>
                                    <li>Decaf</li>
                                </ul>
                                <ul>
                                    <li className="active">Tall</li>
                                    <li>Grande</li>
                                    <li>Venti</li>
                                </ul>
                            </div>
                            <div className="pizza-block__bottom">
                                <div className="pizza-block__price">15 $</div>
                                <div className="button button--outline button--add">
                                    <svg
                                        width="12"
                                        height="12"
                                        viewBox="0 0 12 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                            fill="white"
                                        />
                                    </svg>
                                    <span>Add to Order</span>
                                    <i>2</i>
                                </div>
                            </div>
                        </div> <div className="pizza-block">
                            <img
                                className="pizza-block__image"
                                src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-75109.png"
                                alt="Pizza"
                            />
                            <h4 className="pizza-block__title">Peppermint Mocha</h4>
                            <div className="pizza-block__selector">
                                <ul>
                                    <li className="active">Holiday Blend</li>
                                    <li>Decaf</li>
                                </ul>
                                <ul>
                                    <li className="active">Tall</li>
                                    <li>Grande</li>
                                    <li>Venti</li>
                                </ul>
                            </div>
                            <div className="pizza-block__bottom">
                                <div className="pizza-block__price">15 $</div>
                                <div className="button button--outline button--add">
                                    <svg
                                        width="12"
                                        height="12"
                                        viewBox="0 0 12 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                            fill="white"
                                        />
                                    </svg>
                                    <span>Add to Order</span>
                                    <i>2</i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );


}

export default App;