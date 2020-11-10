using PlotPlants

for str in [latex_symbol("G"),
            latex_symbol("LAI"),
            latex_symbol("G"; sub="sub", sup="sup"),
            latex_symbol("G"; presub="sub", presup="sup"),
            latex_symbol("G"; option="text"),
            latex_symbol("LAI"; option="text"),
            latex_symbol("G"; sub="sub", sup="sup", option="text"),
            latex_symbol("G"; presub="sub", presup="sup", option="text")]
    @show str;
end

for str in [parse_symbol("alpha"),
            parse_symbol("Omega"),
            parse_symbol("alpha", true),
            parse_symbol("Omega", true),
            parse_symbol("degc"),
            parse_symbol("degc", true)]
    @show str;
end

for str in [latex_unit("A"),
            latex_unit("undefined"),
            latex_unit("A"; paren=false),
            latex_unit("A"; squared=true),
            latex_unit("A"; space=true),
            latex_unit("A"; unicode=true)]
    @show str;
end

use_sans();
use_serif();

use_tex();
use_text();

use_sans_tex();
use_sans_text();
use_serif_tex();
use_serif_text();

# This file was generated using Literate.jl, https://github.com/fredrikekre/Literate.jl

