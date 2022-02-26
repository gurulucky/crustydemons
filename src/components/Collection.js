import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Container, Card, Button, Row, Col, Spinner } from 'react-bootstrap'
import {
    Link
} from "react-router-dom";
import { BsFillLockFill } from 'react-icons/bs'
import '../index.css';
import { getNFTsWithHighResImage } from '../actions/manager';
import { getTokenIdsOf } from '../lib/mint'

const NFT_ADDRESS = process.env.REACT_APP_NFT_ADDRESS

const NftItem = ({ nft }) => {
    return (
        <Card >
            <Card.Img variant="top" src={nft.image} style={{ maxWidth: '360px', maxHeight: '360px', width: 'auto', height: 'auto' }} />
            <Card.Body>
                <Card.Title style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {nft.name}
                    <a href={`https://testnets.opensea.io/assets/${NFT_ADDRESS}/${nft.tokenId}`} target='_blank'>
                        <img src='/opensea.png' width='30px' height='30px' />
                    </a>
                </Card.Title>
                <a href={nft.highUri} download target='_blank' style={{ textDecoration: 'none' }}>
                    <Button variant="primary" className='buy_btn'>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <BsFillLockFill />Unlock content

                        </div>
                    </Button>
                </a>
            </Card.Body>
        </Card>
    )
}

export default function Collection() {
    const wallet = useSelector(state => state.manager.wallet)
    const [nfts, setNfts] = useState([])
    const [loadingAssets, setLoadingAssets] = useState(false)

    const getNftsOf = async (wallet) => {
        setLoadingAssets(true)
        console.log(wallet)
        let nftIds = await getTokenIdsOf(wallet)
        console.log('nftIds', nftIds)
        setNfts(await getNFTsWithHighResImage(nftIds))
        setLoadingAssets(false)
    }

    useEffect(() => {
        if (wallet) {
            getNftsOf(wallet)
        } else if (window.localStorage.getItem('wallet')) {
            getNftsOf(window.localStorage.getItem('wallet'))
        }
    }, [])

    return (
        <section id="term">
            <Container>
                <h1 style={{ textDecoration: 'none' }}>
                    Collections
                    <span className="go_mainpage"><Link to="/"> - GO TO MAIN PAGE - </Link></span>
                </h1>
                {
                    loadingAssets ?
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Spinner animation="border" role="status">
                            </Spinner>
                            <span style={{ fontSize: '24px', margin: '10px' }}>Loading collections...</span>
                        </div>
                        : nfts?.length === 0 &&
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <span style={{ fontSize: '24px', margin: '10px' }}>There is no collection.</span>
                        </div>
                }
                <Row className='g-4 mx-auto'>
                    {
                        nfts?.map(nft =>
                            <Col sm={6} md={4}>
                                <NftItem nft={nft} />
                            </Col>
                        )
                    }
                </Row>
            </Container>
        </section>
    )
}