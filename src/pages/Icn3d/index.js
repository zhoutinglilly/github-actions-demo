/** @format */

import React, {useEffect} from 'react'
// import * as $ from 'jquery'
import {iCn3DUI} from '../../components/icn3d/icn3dui'

const $ = window.$

export default props => {
    const launchIcn3d = version => {
        const cfg = getConfig()
        cfg.version = version

        if (cfg.mmtfid !== undefined) {
            setupViewer('mmtfid', cfg.mmtfid, cfg)
        } else if (cfg.pdbid !== undefined) {
            setupViewer('pdbid', cfg.pdbid, cfg)
        } else if (cfg.afid !== undefined) {
            setupViewer('afid', cfg.afid, cfg)
        } else if (cfg.opmid !== undefined) {
            setupViewer('opmid', cfg.opmid, cfg)
        } else if (cfg.cid !== undefined) {
            setupViewer('cid', cfg.cid, cfg)
        } else if (cfg.mmcifid !== undefined) {
            setupViewer('mmcifid', cfg.mmcifid, cfg)
        } else if (cfg.mmdbid !== undefined) {
            setupViewer('mmdbid', cfg.mmdbid, cfg)
        } else if (cfg.gi !== undefined) {
            setupViewer('gi', cfg.gi, cfg)
        } else if (cfg.uniprotid !== undefined) {
            setupViewer('uniprotid', cfg.uniprotid, cfg)
        } else if (cfg.blast_rep_id !== undefined) {
            // if( (cfg.from === 'blast' || cfg.from === 'icn3d') && cfg.command == '') {
            //   command = 'view+annotations;+set+annotation+cdd;+set+annotation+site;+set+view+detailed+view;+select+chain+'
            //     + cfg.blast_rep_id + ';+show+selection';
            // }

            setupViewer('blast_rep_id', cfg.blast_rep_id, cfg)
        } else if (cfg.urlname !== undefined) {
            var urlname = decodeURIComponent(cfg.urlname)

            setupViewer('url', cfg.urltype + '|' + urlname, cfg)
        }
        // e.g., align=103701,1,4,68563,1,167 [mmdbid1,biounit,molecule,mmdbid2,biounit,molecule]
        else if (cfg.align !== undefined) {
            cfg.divid = 'div0'
            //cfg.align = cfg.align;
            //cfg.showalignseq = cfg.showalignseq;

            const icn3dui = new iCn3DUI(cfg)

            icn3dui.show3DStructure()
        } else if (cfg.chainalign !== undefined) {
            cfg.divid = 'div0'
            //cfg.chainalign = cfg.chainalign;
            //cfg.resnum = cfg.resnum;
            //cfg.showalignseq = cfg.showalignseq;

            var icn3dui = new iCn3DUI(cfg)

            icn3dui.show3DStructure()
        } else {
            setupViewer('', '', cfg)
        }
    }

    const setupViewer = (idName, idValue, cfg) => {
        const maxStructure = 5 // show max 5 structures

        const idArray = idValue.replace(/\s/g, '').split(',')

        if (idArray.length > 1) {
            //   resize = false;

            if (cfg.width && cfg.width.indexOf('%') !== -1) {
                cfg.width = 400
                cfg.height = 400
            }
        }

        for (let i = 0, il = idArray.length; i < il && i < maxStructure; ++i) {
            cfg.divid = 'div' + i

            if (idName !== '') cfg[idName] = idArray[i]

            const icn3dui = new iCn3DUI(cfg)

            $.when(icn3dui.show3DStructure()).then(function () {
                //icn3dui.setOption('color', 'spectrum');
            })

            if (idName === '') $('#div' + i + '_wait').hide()
        }
    }

    const getConfig = () => {
        // separating the GET parameters from the current URL
        // repalce "color #" with "color " in the url
        const url = document.URL.replace(/\#/g, '')

        let bNopara = false
        const ampPos = url.indexOf('?')
        if (ampPos === -1) {
            //  alert("Please include '?pdbid=1GPK,2POR,...' in your url");
            bNopara = true
        }

        const params = url.split('?')
        // transforming the GET parameters into a dictionnary
        const search = params[params.length - 1]

        const cfg = {}

        if (!bNopara) {
            let decodeSearch = decodeURIComponent(search)

            // command could contains '&', for example when loading statefile 'load mmdb 1kq2 | parameters &atype=1'
            const commandPos = decodeSearch.indexOf('&command=')
            if (commandPos !== -1) {
                cfg.command = decodeSearch.substr(commandPos + 9) // ";" separated commands
                decodeSearch = decodeSearch.substr(0, commandPos)

                const paraPos = decodeSearch.indexOf(' | parameters ')

                if (paraPos !== -1) {
                    //When loading statefile (e.g., 'load mmdb 1kq2 | parameters &atype=1'), the commands ends with '}}'.
                    const tmpPos = cfg.command.indexOf('}}&')
                    if (tmpPos !== -1) {
                        // more parameters after the command
                        decodeSearch += cfg.command.substr(tmpPos + 2)
                        cfg.command = cfg.command.substr(0, tmpPos + 2)
                    }
                } else {
                    const tmpPos = cfg.command.indexOf('&')
                    if (tmpPos !== -1) {
                        decodeSearch += cfg.command.substr(tmpPos)
                        cfg.command = cfg.command.substr(0, tmpPos)
                    }
                }
            } else {
                cfg.command = ''
            }

            const hashes = decodeSearch.split('&')
            for (let i = 0; i < hashes.length; i++) {
                const hash = hashes[i].split('=')
                cfg[hash[0].trim()] = hash[1] !== undefined ? hash[1].trim() : undefined
            }

            // for mmdb structures, pass the parameters after the first "&" sign
            cfg.inpara = '&' + url.substr(ampPos + 1)
        }

        // changed some parameter names
        cfg.rid = cfg.RID

        cfg.urlname = cfg.url
        if (cfg.urlname && cfg.urlname.indexOf('%3A%2F%2F') === -1) {
            // decoded URL
            // should encode it
            cfg.urlname = encodeURIComponent(cfg.urlname)
        }
        cfg.urltype = cfg.type === undefined ? 'pdb' : cfg.type

        cfg.version = getValue(cfg.v)

        // standardize the input values
        for (const i in cfg) {
            cfg[i] = getValue(cfg[i])
        }

        // backward compatible with showseq
        cfg.showanno = cfg.showanno || cfg.showseq

        cfg.shownote = 1 //cfg.shownote;
        cfg.options = cfg.options !== undefined ? JSON.parse(cfg.options) : undefined

        return cfg
    }

    const getValue = input => {
        if (input === 'true' || input === '1') {
            input = true
        } else if (input === 'false' || input === '0') {
            input = false
        }

        return input
    }

    useEffect(() => {
        launchIcn3d(3)
        return () => {
            if (window.dialog) {
                window.dialog.dialog('destroy')
            }
        }
    })

    return <div id={'div0'}></div>
}
