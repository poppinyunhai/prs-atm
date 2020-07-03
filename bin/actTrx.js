'use strict';

const { helper } = require('../index');

const func = async (argv) => {
    let resp = await helper.getTransactionById(argv.id);
    return resp && argv.json ? resp.transaction : resp.data;
};

module.exports = {
    func,
    name: 'Get transaction by id',
    help: [
        '    --id       Transaction id                    [STRING  / REQUIRED]',
        '    ┌---------------------------------------------------------------┐',
        "    | 1. Use option `--json` to get complete transaction data.      |",
        '    └---------------------------------------------------------------┘',
        '',
        '    > Example:',
        '    $ prs-atm trx --id=0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ --json',
    ],
    render: {
        table: {
            KeyValue: true,
            config: { columns: { 0: { width: 12 }, 1: { width: 61 } } },
        },
    },
};