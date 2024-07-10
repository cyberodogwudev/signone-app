import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';

const FaqsContent = () => {
    return (
        <>
            <div className="faq-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <span className="sub-title">FAQ</span>
                        <h2>Frequently Asked Questions</h2>
                    </div>
 
                    <Accordion allowZeroExpanded preExpanded={['a']}>
                        <AccordionItem uuid="a">
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    Where can I find information on private companies?
                                </AccordionItemButton>
                            </AccordionItemHeading>

                            <AccordionItemPanel>
                                <p><strong>Gbay</strong> is always looking for talented information security and IT risk management professionals who are dedicated, hard working and looking for a challenge. If you are interested in employment with <strong>Gbay</strong>, a company who values you and your family, visit our careers page.</p>
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem uuid="b">
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    Where can I find market research reports?
                                </AccordionItemButton>
                            </AccordionItemHeading>

                            <AccordionItemPanel>
                                <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.</p>
                                <ul>
                                    <li>a console</li>
                                    <li>Two Joy-Con controllers that are detachable</li>
                                    <li>A grip that enables you to combine them into a single gamepad for play on the TV</li>
                                    <li>Two straps for turning the Joy-Cons into individual controllers</li>
                                    <li>A dock which you can use to connect your console to the television for traditional gameplay</li>
                                </ul>
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem uuid="c">
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    What do you mean by risk management?
                                </AccordionItemButton>
                            </AccordionItemHeading>

                            <AccordionItemPanel>
                                <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor.</p>
                                <p>Tunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.</p>
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem uuid="d">
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    Where should I incorporate my business?
                                </AccordionItemButton>
                            </AccordionItemHeading>

                            <AccordionItemPanel>
                                <ul>
                                    <li>a console</li>
                                    <li>Two Joy-Con controllers that are detachable</li>
                                    <li>A grip that enables you to combine them into a single gamepad for play on the TV</li>
                                    <li>Two straps for turning the Joy-Cons into individual controllers</li>
                                    <li>A dock which you can use to connect your console to the television for traditional gameplay</li>
                                </ul>
                            </AccordionItemPanel>
                        </AccordionItem>

                        <AccordionItem uuid="e">
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    Are your questions phrased the way customers will ask them?
                                </AccordionItemButton>
                            </AccordionItemHeading>

                            <AccordionItemPanel>
                                <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.</p>
                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </>
    )
}

export default FaqsContent;