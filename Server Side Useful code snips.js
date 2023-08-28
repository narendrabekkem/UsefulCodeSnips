var gr = new GlideRecord('x_58872_needit_needit');
gr.get('f2796f1d97d4311081a6bb46f053afa5');
gr.query();
while (gr.next()) {
    gs.info(gr.getED());
    for (var field in gr) {
        if (gr[field].getED().getInternalType().match('journal')) {
            gs.info(gr[field].getED().getInternalType());
            gs.info(gr[field].getED());
        }
    }
} 
