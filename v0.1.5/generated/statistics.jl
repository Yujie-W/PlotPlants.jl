using PlotPlants

xs = rand(10) .* 10;
ys = xs .* 0.05 .+ rand(10) .+ 1;
lf = line_regress(xs, ys);
@show lf.df;
lf = line_regress(xs, ys; sorting=false);
@show lf.df;

lf = line_regress(xs, ys; intercept=false);
@show lf.inter;
@show lf.inter_p;
@show lf.inter_ci;

@show test_slope(xs, ys);
@show test_slope(xs, ys; slope=1);
@show test_slope(xs, ys; intercept=false);

N  = 100;
xs = [rand(N); rand(N).* 0.5; rand(N).* 0.2; rand(N).* 0.1];
ys = [rand(N); rand(N).* 0.5; rand(N).* 0.2; rand(N).* 0.1];
calculate_density(xs,ys);
N  = 1001;
xs = [rand(N); rand(N).* 0.5; rand(N).* 0.2; rand(N).* 0.1];
ys = [rand(N); rand(N).* 0.5; rand(N).* 0.2; rand(N).* 0.1];
calculate_density(xs,ys);

# the density will be calculated using 4 threads
calculate_density(xs,ys,4);

@show nanmean(xs);
@show nanstd(xs);
@show nanmax(xs);
@show nanmin(xs);

obsd = rand(100);
pred = rand(100);
@show mae(obsd, pred);
@show mape(obsd, pred);
@show rmse(obsd, pred);

# This file was generated using Literate.jl, https://github.com/fredrikekre/Literate.jl

